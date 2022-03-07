import Head from 'next/head';
import SideBar from '../src/components/SideBar';
import Channelbar from '../src/components/ChannelBar';
import ContentContainer from '../src/components/ContentContainer';
import AreaChartComponent from '../src/components/AreaChart';
import RadialChart from '../src/components/RadialChart';

export default function Home() {
	return (
		<div className="home-container">
			<div>
				<h1>Analytices</h1>
			</div>
			<div>
				<AreaChartComponent />
				<RadialChart />
			</div>
		</div>
	);
}
