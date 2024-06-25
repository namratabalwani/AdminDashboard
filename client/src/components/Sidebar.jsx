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
    
  return (
    <Box component="nav">
        

    </Box>
  )
}

export default Sidebar