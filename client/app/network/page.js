
import dynamic from 'next/dynamic';
import Loader from '../components/Loader';
const NetworkPage = dynamic(() => import("@/app/NetworkPage"),{
  ssr:false,
  loading: () => <Loader/>});


export default function First() {
  return (
    <NetworkPage/>
  );
}
