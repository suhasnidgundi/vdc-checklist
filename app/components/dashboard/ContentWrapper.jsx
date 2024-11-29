import React from 'react'
import { Link } from 'react-router-dom';

function ContentWrapper({ children, title }) {
    return (
        // <!-- Content Wrapper. Contains page content -->
        <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">{title}</h1>
                        </div>
                        {/* <!-- /.col --> */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                        {/* <!-- /.col --> */}
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- /.content-header --> */}

            {/* <!-- Main content --> */}
            <div className="content">
                <div className="container-fluid">
                   {children}   
                </div>
                {/* <!-- /.content --> */}
            </div>
        </div>
        //   <!-- /.content-wrapper -->

    )
}

export default ContentWrapper;
