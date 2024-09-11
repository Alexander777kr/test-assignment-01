import GoBack from '../../components/go-back/GoBack';
import Heading from '../../components/heading/Heading';
import { NumberEnum } from '../../utils/types';

export default function Agreement() {
  return (
    <div>
      <Heading level={NumberEnum.One}>Agreement page</Heading>
      <GoBack />
    </div>
  );
}
