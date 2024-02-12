"use client";

import { BarChart, Compass, Layout, List } from 'lucide-react'
import React from 'react'
import SidebarItem from './SidebarItem';
import { usePathname } from 'next/navigation';

const guestRoutes = [
    {
        icon: Layout,
        label: "Tableau de bord",
        href: "/",
    },
    {
        icon: Compass,
        label: "Rechercher",
        href: "/search",
    },
]

const teacherRoutes = [
    {
        icon: List,
        label: "Cours",
        href: "/teacher/courses",
    },
    {
        icon: BarChart,
        label: "Statistiques",
        href: "/teacher/analytics",
    },
]

const SidebarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes('teacher');

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className='flex flex-col w-full'>
        {routes.map((route) => (
            <SidebarItem 
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
            />
        ))}
    </div>
  )
}

export default SidebarRoutes