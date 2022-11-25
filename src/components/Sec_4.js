import img_1 from "../images/apa-1.png";
import img_2 from "../images/apa-2.png";
import vec_1 from "../images/sec-4__vec-1.png"
import vec_2 from "../images/sec-4__vec-2.png"
function Sec_4(){
  return (
    <>
     <section className="sec-4">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="sec-4__header-left">
              <div className="sec-4__header-title">
               Apa Kata Mereka?
              </div>
              <div className="sec-4__header-text">
               Mereka yang telah menjadi pengunjung tetap kami
              </div>
          </div>
          <div className="sec-4__header-right">
          Selengkapnya 
          </div> 
        </div>
        <div className="sec-4__boxs">
          <div className="sec-4__box">
            <div className="sec-4__vec">
               <img src={vec_1} className="vec-1"/>
            </div>
            <p className="sec-4__box-text">
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="d-flex align-items-center gap-4">
              <img src={img_1} className="sec-4__box-img"/>
              <div>
                <div className="sec-4__name">
                  Guy Hawkins
                </div>
                <div className="sec-4__text">
                32 Tahun, Karyawan
                </div>
              </div>
            </div>
          </div>
          <div className="sec-4__box">
          <div className="sec-4__vec">
               <img src={vec_2} className="vec-2"/>
            </div>
            <p className="sec-4__box-text">
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="d-flex align-items-center gap-4">
              <img src={img_2} className="sec-4__box-img"/>
              <div>
                <div className="sec-4__name">
                Brooklyn Simmons
                </div>
                <div className="sec-4__text">
                20 Tahun, Mahasiswa
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <div className="add"></div>
          <div className="add"></div>
          <div className="add"></div>

        </div>
      </div>
     </section>
    </>
  )
}

export default Sec_4;