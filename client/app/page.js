
import dynamic from 'next/dynamic';
import Loader from './components/Loader';
const Home = dynamic(() => import("@/app/home"),{
  ssr:false,
  loading: () => <Loader/>});


export default function First() {
  return (
    <Home/>
  );
}
