import styles from './index.less';
import { Container } from '@/components';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <Container>
      <h1 className={styles.title}>Page index</h1>
      <div>
        <Link to={'/ssr'}>SSR</Link>
      </div>
      <div>
        <Link to={'/404'}>404</Link>
      </div>
    </Container>
  );
}
