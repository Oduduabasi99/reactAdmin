import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../data"
import WidgetLarge from "../../components/widgetLarge/WidgetLarge"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"


export default function Home() {
  return (
      <div className="home">
          <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="activeUser" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}
