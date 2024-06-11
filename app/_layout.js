import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs } from "expo-router";
import queryClient from "../lib/react-query/query-client";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={30} color={color} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tabs.Screen
          name="news/categories/countryCategories/index"
          options={{
            headerShown: false,
            title: "All Countries",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="flag" size={30} color={color} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tabs.Screen
          name="news/categories/index"
          options={{
            headerShown: false,
            title: "All Categories",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="category" size={30} color={color} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />
        <Tabs.Screen
          name="news/everything/index"
          options={{
            headerShown: false,
            title: "Search",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" size={30} color={color} />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        />

        {/* Hide Tabs */}
        <Tabs.Screen
          name="news/categories/[newsByCategory]"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="news/details/index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="news/countries/index"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </QueryClientProvider>
  );
}

export default RootLayout;
