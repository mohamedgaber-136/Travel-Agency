const DestnationInput = ({searchData,setSeachData,CheckTranScript}) => {
  return (
    <input
      onChange={(e) =>
        setSeachData({ ...searchData, destination: e.target.value })
      }
      type="text"
      placeholder="Istanbul,Turkey"
      name="location"
      className="input"
      value={CheckTranScript()}
    />
  );
};
export default DestnationInput;
