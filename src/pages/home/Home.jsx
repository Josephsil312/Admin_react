import Chart from "../../components/chart/Chart";
import Chartt from "../../components/Bargraph/Bargraph";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { data } from "../../components/Bargraph/Bardata";
import Topbar from './../../components/topbar/Topbar';
import Cir from '../../components/Bargraph/CircularGraph.jsx';
export default function Home() {
  return (
    <div className="home">
      <Topbar/>
      <FeaturedInfo />
      <Chart data={userData} title="Revenue" grid dataKey="Active User"/>
      <div className = 'chartsss'>
      <Chartt data={data} titlee="Monthly sales" grid dataKey="Sales"/>
      <Cir />
      </div>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
