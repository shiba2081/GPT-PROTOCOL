
import dynamic from 'next/dynamic';
import Loader from '../components/Loader';
const SolutionPage = dynamic(() => import("@/app/SolutionPage"),{
  ssr:false,
  loading: () => <Loader/>});


export default function First() {
  return (
    <SolutionPage/>
  );
}
