import React from 'react';
import { Collapse } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'Scheduled Maintenance of Water Supply',
    children: <p>Please be informed that due to scheduled maintenance work on the main pipeline, the water supply will be temporarily suspended on <b>Saturday, 12th July 2025</b>, from <b><i>9:00 AM to 4:00 PM</i></b>. Residents are advised to store sufficient water in advance and avoid unnecessary usage during this period. We apologize for the inconvenience and appreciate your cooperation.</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];
const NoticePage = () => {
  const onChange = key => {
    console.log(key);
  };
  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};
export default NoticePage;