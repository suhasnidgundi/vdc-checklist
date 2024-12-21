import React from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import { useEffect } from 'react';

const BMDashboard = () => {

  const BASE_URL = import.meta.env.VITE_API_URL

  const token = sessionStorage.getItem('authToken');

  const [branchlist, setBranchlist] = React.useState([]);
  const [selectedBranch, setSelectedBranch] = React.useState('');
  const [selectedMonth, setSelectedMonth] = React.useState('');
  const [bmDashboardCount, setBmDashboardCount] = React.useState({});

  const today = new Date();
  const thisMonth = today.getMonth() + 1;
  const thisYear = today.getFullYear();
  const thisMonthWithYear = `${thisYear}-${String(thisMonth).padStart(2, '0')}`;

  useEffect(() => {
    const fetchBranchList = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/getUserBranchList`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        //console.log('API Response:', response); // Log API response
        if (response.ok) {
          const result = await response.json();
          //console.log('Parsed API Response:', result);
          if (result.STATUS) {
            // Check the correct key
            setBranchlist(result.data);
          } else {
            //toast.error( result.message || 	'An error occurred while fetching the Branch list.',);
          }
        } else {
          const errorBody = await response.text();
          console.error('Error response:', errorBody);
          //toast.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        //toast.error('Failed to fetch branch list');
      }
    };

    fetchBranchList();
  }, [token, selectedBranch]);

  useEffect(() => {

    const selectBranch = sessionStorage.getItem('selectedBranchId');
    const selectMonth = sessionStorage.getItem('selectedMonth') || thisMonthWithYear;
    // Set the current date if selectedDate is empty

    setSelectedMonth(selectMonth);
    // Check if selectedBranch exists, otherwise set default from branchlist once it's available
    if (selectBranch) {
      setSelectedBranch(selectBranch);
    } else if (branchlist.length > 0) {
      setSelectedBranch(branchlist[0].branch_id);
      sessionStorage.setItem('selectedBranchId', branchlist[0].branch_id);
    }
  }, [branchlist, thisMonthWithYear, selectedBranch]);

  useEffect(() => {
    const fetchDashboard = async () => {
      const requestData = {
        selectedMonth: selectedMonth,
        selectedBranch: "128",
      };
      try {
        const response = await fetch(`${BASE_URL}/api/BM_DashboardCount`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestData),
        });

        //console.log('Dashboard Count :', response); // Log API response
        if (response.ok) {
          const result = await response.json();
          //console.log('Parsed API Response:', result);
          if (result.STATUS) {
            // Check the correct key
            setBmDashboardCount(result.data);
          } else {
            //console.log(result.message);
          }
        } else {
          const errorBody = await response.text();
          console.error('Error response:', errorBody);

        }
      } catch (error) {
        console.error('Fetch error:', error);

      }
    };

    fetchDashboard();
  }, [token, selectedMonth, selectedBranch]);

  return (
    <DashboardLayout title="Branch Manager's Dashboard">
      <div className='row' style={{ minHeight: '630px' }}>
        <div className='col-12 col-sm-6 col-md-3'>
          <div className='small-box bg-info' >
            <div className='inner'>
              <h3>{bmDashboardCount.morningTasksCount}</h3>
              <p>Total Morning Tasks</p>
            </div>
            <div className='icon d-block '>
              <i className='fas fa-sun'></i>
            </div>

          </div>
        </div>
        <div className='col-12 col-sm-6 col-md-3'>
          <div className='small-box bg-success'>
            <div className='inner'>
              <h3>
                {bmDashboardCount.nightTasksCount}
              </h3>
              <p>Total Night Closing Tasks</p>
            </div>
            <div className='icon d-block '><i className="fas fa-solid fa-moon"></i>
            </div>

          </div>
        </div>
        <div className='col-12 col-sm-6 col-md-3'> </div>
        <div className='col-12 col-sm-6 col-md-3'> 	</div>
      </div>
    </DashboardLayout>
  )
}

export default BMDashboard