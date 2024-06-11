
import dynamic from 'next/dynamic';
import Loader from '../components/Loader';
const LearnPage = dynamic(() => import("@/app/LearnPage"),{
  ssr:false,
  loading: () => <Loader/>});


export default function First() {
  return (
    <LearnPage/>
  );
}
