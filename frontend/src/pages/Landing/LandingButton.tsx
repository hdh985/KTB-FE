import { useNavigate } from 'react-router-dom';

const LandingButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/InputInfo/index.tsx');
  };

  return (
    <button 
      className="btn btn-primary w-full" 
      onClick={handleButtonClick}
    >
      시작하기
    </button>
  );
};

export default LandingButton