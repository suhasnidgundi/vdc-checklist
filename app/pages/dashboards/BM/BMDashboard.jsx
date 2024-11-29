import React from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import { Link } from 'react-router-dom'

const BMDashboard = () => {
  return (
    <DashboardLayout title="Branch Manager's Dashboard">
      <div className="row">
        <div class="col-lg-3 col-6">
          {/* <!-- small box --> */}
          <div class="small-box bg-info">
            <div class="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <Link to="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        {/* <!-- ./col --> */}
        <div class="col-lg-3 col-6">
          {/* <!-- small box --> */}
          <div class="small-box bg-success">
            <div class="inner">
              <h3>53<sup style={{ fontSize: "20px" }}>%</sup></h3>

              <p>Bounce Rate</p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            <Link to="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        {/* <!-- ./col --> */}
        <div class="col-lg-3 col-6">
          {/* <!-- small box --> */}
          <div class="small-box bg-warning">
            <div class="inner">
              <h3>44</h3>

              <p>User Registrations</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add"></i>
            </div>
            <Link to="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        {/* <!-- ./col --> */}
        <div class="col-lg-3 col-6">
          {/* <!-- small box --> */}
          <div class="small-box bg-danger">
            <div class="inner">
              <h3>65</h3>

              <p>Unique Visitors</p>
            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
            <Link to="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        {/* <!-- ./col --> */}
      </div>
    </DashboardLayout>
  )
}

export default BMDashboard