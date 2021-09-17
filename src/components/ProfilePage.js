import React from 'react'
import '../style/profile_page.css'
import {RiDashboardLine} from 'react-icons/ri'

function ProfilePage() {
    return (
        <div className='profile_main' >
            <div className="profile_left">
                <div className="left_content">
                     <h1>code me</h1>
                     <div className="profile_left_name">
                         <div className="left_circle"></div>
                         <div className="name_user_section">
                            <div className="left_user_name">Olzhas</div>
                            <div className="left_family_name">Kurman</div>
                        </div>
                     </div>
                     <div className='profile_left_icon'>
                           <RiDashboardLine className='dashboard_icon left_prof_icon' />
                       <div>Dashboard</div>
                        </div>
                </div>
            </div>
            <div className="profile_right">Right</div>
        </div>
    )
}

export default ProfilePage
