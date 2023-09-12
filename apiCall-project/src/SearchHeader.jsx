function SearchHeader({ search }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger
    search("berke");
    // otomatik yenilenmeyi engelliyor
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz ?</label>
        <input type="text" />
      </form>
    </div>
  );
}
export default SearchHeader;
