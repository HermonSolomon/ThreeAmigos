import React from 'react'

export default function Title({ name, title }) {
 return (
  <div className="">
   <div className="col-10 mx-auto my-2 text-center textTitle">
    <h1 className="text-capitalize font-weight-bold">{name} <strong>{title} </strong></h1>
   </div>
  </div>
 )
}
