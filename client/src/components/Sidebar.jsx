import React from 'react'
import {
    Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme
} from "@mui/material";
import {
    SettingsOutlined, ChevronLeft, ChevronRightOutlined, HomeOutlined, ShoppingCartOutlined, Groups2Outlined, RecieptLongOutlined, 
    PublicOutlined, PointOfSaleOutlined, TodayOutlined, CalendarMonthOutlined, AdminPanelSettingsOutlined, TrendingUpOutlined, 
    PieChartOutlined 
} from "@mui/icons-material";
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assests/profile.jpeg";


const Sidebar = ({
    drawerWidth,
    isSidebarOpen, 
    setIsSidebarOpen,
    isNonMobile
}) => {
    const  { pathName  } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathName.substring(1));
    }, [pathName]);

    const navItems = [
        {
            text: "Dashboard",
            icon: <HomeOutlined/>
        },
        {
            text: "client Facing",
            icon: null
        },
        {
            text: "Products",
            icon: <ShoppingCartOutlined/>
        },
        {
            text: "Customers",
            icon: <Groups2Outlined/>
        },
        {
            text: "Transactions",
            icon: <RecieptLongOutlined/>
        },
        {
            text: "Geography",
            icon: <PublicOutlined/>
        },
        {
            text: "Sales",
            icon: null
        },  
        {
            text: "Overviewe",
            icon: <PointOfSaleOutlined/>
        },
        {
            text: "Daily",
            icon: <TodayOutlined/>
        },
        {
            text: "Monthly",
            icon: <CalendarMonthOutlined/>
        },
        {
            text: "BreakDown",
            icon: <PieChartOutlined/>
        },
        {
            text: "Management",
            icon: null        },
        {
            text: "Admin",
            icon: <AdminPanelSettingsOutlined/>
        },
        {
            text: "Performance",
            icon: <TrendingUpOutlined/>
        },
    ]
  return (
    <Box component="nav">
        {isSidebarOpen && (
            <Drawer open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px" ,
                            width: drawerWidth
                        }

                    }}>
                        <Box width="100%">
                            <Box m="1.5rem 2rem  2rem 3 rem">
                                <FlexBetween color={theme.palette.secondary.main}>
                                    <Box display="flex" alignItems="center" gap="0.5rem">
                                        <Typography variant='h4' fontWeight="bold">
                                            ECOMVISION
                                        </Typography>
                                    </Box>
                                    {!isNonMobile && (
                                        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                            <ChevronLeft />
                                        </IconButton>
                                    )}
                                </FlexBetween>
                            </Box>
                            <List>
                                {
                                    navItems.map(({text, icon})  => {
                                        if(!icon)  {
                                            return (
                                            <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem"}}>
                                                {text}
                                            </Typography>
                                        )}
                                        const lcText = text.toLowerCase();
                                        return (
                                            <ListItem key={text} disablePadding>
                                                <ListItemButton onClick={() => {navigate(`/${lcText}`);
                                                                                setActive(lcText);}}></ListItemButton>

                                            </ListItem>
                                        )
                                    }

                                )}
                            </List>

                        </Box>
                    </Drawer>
        )}

    </Box>
  )
}

export default Sidebar