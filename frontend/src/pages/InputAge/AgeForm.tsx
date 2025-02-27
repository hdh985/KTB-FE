import { Text5xl } from '@/components/ui/Texts';
import { APIButton } from '../../components/ui/Button';
import { useEffect, useState } from 'react';
import axios from 'node_modules/axios';

export default function AgeForm() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('api/user', {
          withCredentials: true,
        });

        if (response.data && response.data.name) {
          setValue(response.data.name);
        }
      } catch (error) {
        console.error('사용자 데이터 불러오기 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const isValueValid = value.trim().length > 0;

  // if (loading) return <div className="container center">로딩 중...</div>

  return (
    <div className="center flex-col gap-10">
      <Text5xl>나이를 입력해 주세요.</Text5xl>
      <form onSubmit={onSubmit} className="flex flex-col w-80 gap-3">
        <input
          placeholder="50"
          className="text-center w-full h-12 bg-white border-2 focus:border-myLightGreen focus:outline-none"
          type="number"
          min="1"
          max="150"
          step="1"
          value={value}
          onChange={onChange}
          required
        />
        <APIButton
          url={''}
          path="info/input/gender"
          name="다음"
          data={{ age: value }}
          method="PATCH"
          disabled={!isValueValid}
        />
      </form>
    </div>
  );
}
