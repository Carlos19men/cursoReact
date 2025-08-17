import './App.css'
import { TwiterCard } from './TwitterFollowCard';
export function App(){
    return (
        <>
            <TwiterCard userName="midudev" name="Miguel Ángeñ Dirán" isFollowing={true}/>
            <TwiterCard userName="Batman" name="batman" isFollowing={false}/>
            <TwiterCard userName="Robin" name="Robin" isFollowing={3 > 2}/>
            <TwiterCard userName="Robin" name="Robin" isFollowing/>


        </>
    );
}