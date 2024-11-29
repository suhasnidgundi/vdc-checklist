import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        // <!-- Main Footer -->
        <footer className="main-footer">
            {/* <!-- To the right --> */}
            <div className="float-right d-none d-sm-block">

            </div>
            {/* <!-- Default to the left --> */}
            <strong>Copyright &copy; 2024 <Link href="https://www.vijayadiagnostic.com/">Vijaya Diagnostic Centre</Link>.</strong> All rights reserved.
        </footer>
    )
}

export default Footer