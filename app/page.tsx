import {  CreditCard, Banknote, ArrowUpRight, HelpCircle, ArrowDownLeft, Home, Clock3, MessageSquare, User, ScanLine } from "lucide-react";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="min-h-screen w-full flex flex-col  pb-20">
      {/* Profile */}
      <div className="flex items-center justify-between px-4 pt-6">
        <div>
          <p className="text-gray-400 text-sm">Hello,</p>
          <h1 className="text-xl font-bold ">Aurellia!</h1>
        </div>
        <Image
          src="/profile.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </div>

      {/* Visa */}
      <div className="px-4 mt-6">
        <div className="relative bg-gradient-to-tr from-cyan-500 to-sky-600 rounded-2xl text-white p-5 h-[200px] flex flex-col justify-between">
          <div className="flex justify-between items-center text-sm">
            <ScanLine className="w-6 h-6" />
            <p className="text-sm font-semibold">Premium</p>
          </div>
          <div className="tracking-widest text-[15px] mt-4 mb-2">
            4000 5127 2123 2018
          </div>
          <div className="flex justify-between items-center text-sm">
            <p className="font-semibold">Aurellia</p>
            <p className="font-bold text-sm">VISA</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="mt-8 px-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500 font-semibold text-[15px]">Services</p>
          <p className="text-xs text-gray-400">See All</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: <CreditCard className="size-6 h-6 text-blue-600" />, name: "Card" },
            { icon: <Banknote className="size-6 h-6 text-blue-600" />, name: "Finance" },
            { icon: <ArrowUpRight className="size-6 h-6 text-blue-600" />, name: "Top Up" },
            { icon: <HelpCircle className="size-6 h-6 text-blue-600" />, name: "Help" },
          ].map((service) => (
            <div key={service.name} className="flex flex-col items-center">
              <div className="size-12 bg-blue-200 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <p className="text-[13px]  mt-2 text-center">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="mt-10 px-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500 font-semibold text-[15px]">Activity</p>
          <p className="text-xs text-gray-400">See All</p>
        </div>
        <div className="space-y-4">
          {/* History */}
          <div className="rounded-xl shadow-sm border px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-[15px]">Deposit</p>
                  <p className="text-sm text-blue-600">Rp15.510.000,-</p>
                  <p className="text-xs text-gray-500 mt-1">Bank Mandiri ATM</p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500">
                <p>11 March 2022</p>
                <p>11.21 AM</p>
              </div>
            </div>
          </div>

          {/* History 2 */}
          <div className="rounded-xl shadow-sm border px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-red-100 rounded-full flex items-center justify-center">
                  <ArrowDownLeft className="size-5 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-[15px]">Withdraw</p>
                  <p className="text-sm text-red-500">Rp15.510.000,-</p>
                  <p className="text-xs text-gray-500 mt-1">Bank Mandiri ATM</p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500">
                <p>11 March 2022</p>
                <p>11.22 AM</p>
              </div>
            </div>
          </div>

          {/* History 3 */}
          <div className="rounded-xl shadow-sm border px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-red-100 rounded-full flex items-center justify-center">
                  <ArrowDownLeft className="size-5 text-red-500" />
                </div>
                <div>
                  <p className="font-semibold text-[15px]">Withdraw</p>
                  <p className="text-sm text-red-500">Rp15.510.000,-</p>
                  <p className="text-xs text-gray-500 mt-1">Bank Mandiri ATM</p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500">
                <p>11 March 2022</p>
                <p>11.22 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Navigation  */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-2 flex justify-around items-center">
        <Home className="size-6 text-blue-600" />
        <Clock3 className="size-6 text-gray-400" />
        <MessageSquare className="size-6 text-gray-400" />
        <User className="size-6 text-gray-400" />
      </div>
    </div>
  );
}
