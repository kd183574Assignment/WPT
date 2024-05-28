import React from "react";
import NavBar from '../components/navbar'
import DashboardItem from "../components/dashboardItem";

function Home()
{
    return(
        <div>
            <NavBar/>
                <h2 className="page-header">HOME</h2>
                <div className="row mt-5">
                    <div className="col">
                        <DashboardItem title='USERS' value= '100k' />
                    </div>
                    <div className="col">
                    <DashboardItem title='PROPERTIES'value ="100k" />
                    </div>
                     <div className="col">
                     <DashboardItem title='BOOKINGS'value ="10k" />
                     </div>
                     <div className="col">
                     <DashboardItem title='REVENUE'value ="$100b" />

                     </div>

                    </div>
                </div>
            
        // </div>
    )

}
export default Home