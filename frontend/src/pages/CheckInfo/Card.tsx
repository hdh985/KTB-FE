import { useState, useEffect } from 'react'
import axios from 'axios'

const CardLayout = 'w-full center flex-col px-10 py-12'
const CardStyle = 'rounded-tl-3xl rounded-r-3xl bg-white drop-shadow-lg'
const CardText = 'text-left'
const CardClassName = `${CardLayout} ${CardStyle} ${CardText}`

const thStyle = 'px-5 py-3 text-2xl/8 align-top bg-myBaseBrown'
const tdStyle = 'px-5 py-3 text-2xl/8 w-[30px]'

type CardProps = {
  url: string
}

interface ApiResponse {
  name: string
  age: string
  gender: string
  taking_medicine: Array<{
    type: string
    day: string
    frequency: string
  }>
}

export default function Card({ url }: CardProps) {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`, {
          withCredentials: true
        })
        setData(response.data)
      } catch (error) {
        console.error('Axios error:', error)
      }
    }

    fetchData()
  }, [])

  const getGender = (gender: string) => {
    if (gender === 'm') return '남'
    if (gender === 'f') return '여'
    return '-'
  }

  return (
    <div className={CardClassName}>
      <table>
        <tbody>
          <tr id="name">
            <th
              scope="row"
              className={thStyle}
            >
              이름
            </th>
            <td
              colSpan={2}
              className={tdStyle}
            >
              {data?.name || '-'}
            </td>
          </tr>
          <tr id="age">
            <th
              scope="row"
              className={thStyle}
            >
              나이
            </th>
            <td
              colSpan={2}
              className={tdStyle}
            >
              {data?.age || '-'}
            </td>
          </tr>
          <tr id="gender">
            <th
              scope="row"
              className={thStyle}
            >
              성별
            </th>
            <td
              colSpan={2}
              className={tdStyle}
            >
              {data ? getGender(data.gender) : '-'}
            </td>
          </tr>
          {data?.taking_medicine && data.taking_medicine.length > 0 ? (
            <>
              <tr>
                <th
                  scope="row"
                  rowSpan={data.taking_medicine.length}
                  className={thStyle}
                >
                  복용 중인 <br />
                  약의 종류
                </th>
                <td className={tdStyle}>{data.taking_medicine[0].type}</td>
                <td className={tdStyle}>
                  {data.taking_medicine[0].day}일에 {data.taking_medicine[0].frequency}번
                </td>
              </tr>
              {data.taking_medicine.slice(1).map((med, index) => (
                <tr key={index}>
                  <td className={tdStyle}>{med.type}</td>
                  <td className={tdStyle}>
                    {med.day}일에 {med.frequency}번
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <th
                scope="row"
                className={thStyle}
              >
                복용 중인 <br />
                약의 종류
              </th>
              <td
                colSpan={2}
                className={tdStyle}
              >
                -
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
