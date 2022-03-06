import '../styles/globals.css';
import SideBar from '../src/components/SideBar';
import Channelbar from '../src/components/ChannelBar';
import ContentContainer from '../src/components/ContentContainer';

function MyApp({ Component, pageProps }) {
	return (
		<div className="flex">
			<SideBar />
			<div className="ml-[64px] flex-1">
				<ContentContainer component={<Component {...pageProps} />} />
			</div>
		</div>
	);
}

export default MyApp;
