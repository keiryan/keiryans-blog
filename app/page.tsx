"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Notification Banner */}
      {showNotification && (
        <div className="bg-slate-800 text-white px-4 py-3 text-sm relative animate-in slide-in-from-top duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-center">
            <p className="text-center">
              We&apos;ve just launched a new feature!{' '}
              <span className="underline cursor-pointer hover:text-slate-300 transition-colors">
                Check out the new dashboard
              </span>
              .
            </p>
            <button
              onClick={() => setShowNotification(false)}
              className="absolute right-4 p-1 hover:bg-slate-700 rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-semibold text-gray-900">Untitled UI</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Home
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  Products
                  <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  Resources
                  <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </button>
              </div>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Pricing
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900 transition-colors font-medium hidden sm:block">
                Log in
              </button>
              <Button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Article Header */}
        <div className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-6">
            Design
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            UX review presentations
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            How do you create compelling presentations that wow your colleagues and impress your managers? Here&apos;s how to get started.
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">FS</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Frankie Sullivan</p>
              <p className="text-sm text-gray-500">20 Jan 2022</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Woman working on laptop in modern office"
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Introduction</h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in{' '}
            <a href="#" className="text-slate-800 underline hover:text-slate-600 transition-colors">
              volutpat mollis
            </a>{' '}
            at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </p>

          {/* Second Image */}
          <div className="my-12 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern minimalist workspace with desk and chair"
                className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Image courtesy of Laura Davidson via{' '}
              <a href="#" className="underline hover:text-gray-700 transition-colors">
                Unsplash
              </a>
            </p>
          </div>

          {/* Quote Block */}
          <blockquote className="border-l-4 border-slate-800 pl-6 my-12 animate-in fade-in slide-in-from-bottom duration-700 delay-900">
            <p className="text-xl sm:text-2xl font-medium text-gray-900 italic leading-relaxed mb-4">
              &ldquo;In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.&rdquo;
            </p>
            <footer className="text-gray-600">
              — Olivia Rhye, Product Designer
            </footer>
          </blockquote>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquam pellentesque aenean hac vestibulum turpis mi{' '}
            <a href="#" className="text-slate-800 underline hover:text-slate-600 transition-colors">
              bibendum diam
            </a>
            . Tempor integer aliquam in vitae malesuada fringilla.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Elit nisl in eleifend sed nisl. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat{' '}
            <a href="#" className="text-slate-800 underline hover:text-slate-600 transition-colors">
              auctor aliquam
            </a>
            . Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Software and tools</h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Other resources</h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Sagittis et eu et elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
          <ol className="list-decimal list-inside space-y-3 text-gray-600 text-lg leading-relaxed">
            <li>
              Lectus id duis vitae porttitor enim{' '}
              <a href="#" className="text-slate-800 underline hover:text-slate-600 transition-colors">
                gravida morbi
              </a>
              .
            </li>
            <li>
              Eu turpis{' '}
              <a href="#" className="text-slate-800 underline hover:text-slate-600 transition-colors">
                posuere semper feugiat
              </a>{' '}
              volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
            </li>
          </ol>
          </p>
        </div>
      </main>
    </div>
  );
}
