import Basic from './Basic';
import CustomHeaderFilter from './CustomHeaderFilter';
import ExpandableTreeData from './ExpandableTreeData';

const MuiXDataGrid = () => {
  return (
    <div className='bg-white p-10 w-full'>
      <Basic />
      <ExpandableTreeData />
      <CustomHeaderFilter />
    </div>
  );
}

export default MuiXDataGrid;