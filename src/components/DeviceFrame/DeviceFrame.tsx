import React from "react";
import "./devices.css";

export default function DeviceFrame(props: { contentImageSrc: string; height?: string }) {
  return (
    <div className="device device-iphone-x">
      <div className="device-frame">
        <img className="device-content" height={props.height} src={props.contentImageSrc} alt="device-content" />
      </div>
      <div className="device-stripe"></div>
      <div className="device-header"></div>
      <div className="device-sensors"></div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
  );
}
