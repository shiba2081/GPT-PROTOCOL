
import dynamic from 'next/dynamic';
import Loader from '../components/Loader';
const CommunityPage = dynamic(() => import("@/app/CommunityPage"),{
  ssr:false,
  loading: () => <Loader/>});


export default function First() {
  return (
    <CommunityPage/>
  );
}
