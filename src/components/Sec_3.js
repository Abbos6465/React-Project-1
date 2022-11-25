import img from "../images/sum.png"

function Sec_3(){
  return (
    <>
    <section className="sec-3">
      <div className="container">
        <div className="d-flex justify-content-around align-items-center">
          <div className="d-flex gap-4 align-items-center">
            <img src={img} className="sec-3__img"/>
            <div className="">
              <div className="sec-3__sum">
                500+
              </div>
              <div className="sec-3__text">
              Judul Buku
              </div>
            </div>
          </div>
          <div className="d-flex gap-4 align-items-center">
            <img src={img} className="sec-3__img"/>
            <div className="">
              <div className="sec-3__sum">
              $0
              </div>
              <div className="sec-3__text">
              Gratis Peminjaman
              </div>
            </div>
          </div>
          <div className="d-flex gap-4 align-items-center">
            <img src={img} className="sec-3__img"/>
            <div className="">
              <div className="sec-3__sum">
                5
              </div>
              <div className="sec-3__text">
              Kegiatan Rutin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Sec_3;