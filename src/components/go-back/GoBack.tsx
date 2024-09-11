import { useNavigate } from 'react-router-dom';

export default function GoBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <button onClick={goBack}>Назад</button>;
}
