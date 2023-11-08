const Page_404 = () => {

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

  return (
    <div onLoad={showPage}>
        <div id="loader"></div>
        <div id="myDiv" className='page__404'>
            <img className='notfound__img' src="/404.jpg" alt="404 Page Not Found"/>
        </div>
    </div>
  )
}

export default Page_404;
