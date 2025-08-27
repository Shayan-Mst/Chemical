import type { Industries } from "../types/type";

export const industries: Industries[] = [
  {
    name: "صنعت شوینده",
    svg: ( <svg
        className="w-8 h-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        fill="currentColor"
        
      >
        <path d="M320 128c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32H144 96 48c-26.5 0-48 21.5-48 48v64.8c0 19 11.2 36.2 28.5 43.9l67.5 30V368c0 26.5 21.5 48 48 48H403.1c18.4 0 35.8-7.9 48-21.7L633.5 187.7c12.3-13.9-.3-35.4-18.4-31.5L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8H288V128h32zM96 208v86.1L48 272.8V208H96z"/>
      </svg>),
    linkPage: "/clr",
    color : "bg-red-600",
       border : "border-red-600"
    
  },
  {
    name: "تصفیه آب",
    svg: (<i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-droplet w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="droplet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"></path></svg></i>),
    linkPage: "/wtr",
    color : "bg-blue-600",
    border : "border-blue-600"
  },
  {
    name: "کشاورزی",
    svg: (<i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-seedling w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="seedling" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"></path></svg></i>),
    linkPage: "/agr",
    color : "bg-green-600",
    border : "border-green-600"
  },
  {
    name: "نساجی",
    svg: (<i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-scissors w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="scissors" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>),
    linkPage: "/txt",
    color : "bg-orange-600",
    border : "border-orange-600"
  },
  {
    name: "آزمایشگاهی",
    svg: (<i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-microscope w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="microscope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M160 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM32 448H320c70.7 0 128-57.3 128-128s-57.3-128-128-128V128c106 0 192 86 192 192c0 49.2-18.5 94-48.9 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm80-64H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg></i>),
    linkPage: "/lab",
    color : "bg-purple-600",
    border : "border-purple-600"
  },
  {
    name: "صنعت رنگ",
    svg: (<i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-industry w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="industry" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"></path></svg></i>),
    linkPage: "/pnt",
    color : "bg-yellow-600",
    border : "border-yellow-600"
  },
  {
    name: "صنعت دارویی",
    svg: (<i className="text-white text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-pills w-8 h-8"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pills" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M112 96c-26.5 0-48 21.5-48 48V256h96V144c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112V368c0 61.9-50.1 112-112 112S0 429.9 0 368V144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z"></path></svg></i>),
    linkPage: "/phr",
    color : "bg-gray-600",
    border : "border-gray-600"
  }
];