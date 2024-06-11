
import dynamic from 'next/dynamic';
import Loader from '../components/Loader';
const BuildPage = dynamic(() => import("@/app/BuildPage"),{
  ssr:false,
  loading: () => <Loader/>});


export default function First() {
  return (
    <BuildPage/>
  );
}
