import React, { useState } from 'react';
import {
    DashboardLayoutRoot, DashboardLayoutWrapper,
    DashboardLayoutContainer, DashboardLayoutContent
} from 'src/components/dashboard/dashboardLayoutStyles';
import DashboardNavbar from 'src/components/dashboard/DashboardNavbar';
import DashboardSidebar from 'src/components/dashboard/DashboardSidebar';
import { EditAccountDetails } from 'src/components';

const EditAccountDetailsLayout = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <DashboardLayoutRoot>
            <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
            <DashboardSidebar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
            <DashboardLayoutWrapper>
                <DashboardLayoutContainer>
                    <DashboardLayoutContent>
                        <EditAccountDetails />
                    </DashboardLayoutContent>
                </DashboardLayoutContainer>
            </DashboardLayoutWrapper>
        </DashboardLayoutRoot>
    );
}

export default EditAccountDetailsLayout;