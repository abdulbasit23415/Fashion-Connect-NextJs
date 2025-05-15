import {  Home,Settings,Bell, SquareUserRound, Ellipsis  } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

   
  const items = [
    {
      title: "Home",
      url: "homepage",
      icon: Home,
    },
    {
      title: "Notification",
      url: "notifications",
      icon: Bell,
    },
    {
      title: "Profile",
      url: "userProfile",
      icon:  SquareUserRound ,
    },
    {
      title: "More",
      url: "more",
      icon:  Ellipsis,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },

  ]
   
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarContent className="bg-pink-300">
          <SidebarGroup>
            <SidebarGroupLabel><img src="/images/All in one.png" alt=" " className="mt-20 pr-5"  /></SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="pt-20 flex flex-col gap-5 ml-8">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title} >
                    <SidebarMenuButton asChild >
                      <a href={item.url} className="space-x-3">
                        <item.icon />
                        <span className="text-[110%]">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }