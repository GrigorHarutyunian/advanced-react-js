import { useState } from "react";
import "./App.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Hidden } from "@mui/material";

const products = [
  {
    id: 1,
    artist: "Ed Sheeran",
    songName: "Shape of You",
    price: "$100",
    img: "https://i1.sndcdn.com/artworks-000201927280-2vsnux-t500x500.jpg",
  },
  {
    id: 2,
    artist: "Taylor Swift",
    songName: "Blank Space",
    price: "$200",
    img: "https://i.ytimg.com/vi/KgU7URwpIFI/sddefault.jpg",
  },
  {
    id: 3,
    artist: "Imagine Dragons",
    songName: "Radioactive",
    price: "$140",
    img: "https://images.genius.com/a1632bc91da7a8b8a1cc63dc3b65953f.1000x1000x1.png",
  },
  {
    id: 4,
    artist: "Adele",
    songName: "Rolling in the Deep",
    price: "$310",
    img: "https://m.media-amazon.com/images/M/MV5BOTRlYTBjMDMtY2VkMi00ZTZmLTk1MzQtZjg1M2I0NjQ0ZTFkXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 5,
    artist: "Maroon 5",
    songName: "Sugar",
    price: "$160",
    img: "https://i.ytimg.com/vi/ml8r08amThw/maxresdefault.jpg",
  },
  {
    id: 6,
    artist: "Billie Eilish",
    songName: "Bad Guy",
    price: "$230",
    img: "https://i.ytimg.com/vi/4-TbQnONe_w/maxresdefault.jpg",
  },
  {
    id: 7,
    artist: "The Weeknd",
    songName: "Blinding Lights",
    price: "$30",
    img: "https://f4.bcbits.com/img/a2542331661_65",
  },
  {
    id: 8,
    artist: "Katy Perry",
    songName: "Firework",
    price: "$190",
    img: "https://static.stereogum.com/uploads/2023/08/Katy-Perry-Firework-1692215086.jpeg",
  },
  {
    id: 9,
    artist: "Coldplay",
    songName: "Viva la Vida",
    price: "$130",
    img: "https://m.media-amazon.com/images/I/71NINvugUoL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 10,
    artist: "Bruno Mars",
    songName: "Uptown Funk",
    price: "$110",
    img: "https://i.ytimg.com/vi/7Ya2U8XN_Zw/maxresdefault.jpg",
  },
  {
    id: 11,
    artist: "Eminem",
    songName: "Lose Yourself",
    price: "$180",
    img: "https://i.ytimg.com/vi/wAIHIxTXvbo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLAS6Ok0KAcUQDoQJijrMMtkvL0KrA",
  },
  {
    id: 12,
    artist: "Shawn Mendes",
    songName: "Senorita",
    price: "$250",
    img: "https://i.ytimg.com/vi/dFp_b5DPIIo/maxresdefault.jpg",
  },
  {
    id: 13,
    artist: "Rihanna",
    songName: "Diamonds",
    price: "$190",
    img: "https://i.ytimg.com/vi/sR4UYZPhTXY/maxresdefault.jpg",
  },
  {
    id: 14,
    artist: "Justin Bieber",
    songName: "Sorry",
    price: "$220",
    img: "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
  },
  {
    id: 15,
    artist: "Ariana Grande",
    songName: "Thank U, Next",
    price: "$200",
    img: "https://i.ytimg.com/vi/qXDLp6VZYm4/sddefault.jpg",
  },
  {
    id: 16,
    artist: "Linkin Park",
    songName: "In the End",
    price: "$270",
    img: "https://i1.sndcdn.com/artworks-000311471316-x8mc95-t500x500.jpg",
  },
  {
    id: 17,
    artist: "Selena Gomez",
    songName: "Wolves",
    price: "$150",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db3c486f-60e1-4c41-8e62-66adacda32f6/dbw1ema-5d199efb-9359-4735-be3b-9b39a8bdf32d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RiM2M0ODZmLTYwZTEtNGM0MS04ZTYyLTY2YWRhY2RhMzJmNlwvZGJ3MWVtYS01ZDE5OWVmYi05MzU5LTQ3MzUtYmUzYi05YjM5YThiZGYzMmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dkCyEV6wazxjdeJDHkjM6eaIawNujRNVZmm_t5WDtdM",
  },
  {
    id: 18,
    artist: "Dua Lipa",
    songName: "New Rules",
    price: "$210",
    img: "https://image.api.playstation.com/vulcan/img/cfn/11307yaFUG8XMl2atLiK-DG0WpiL8UExbxWfcReL8-co3HTMSdV3S2d08e5M4BzLsEzg66SjI76cx7Tv2bbdkxolNHsS45a8.png",
  },
  {
    id: 19,
    artist: "Twenty One Pilots",
    songName: "Stressed Out",
    price: "$160",
    img: "https://i.ytimg.com/vi/tgvsjLOHup8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gJCgbMA8=&rs=AOn4CLDmhg2JVxcdHgs6_g8OwtSlSVMfOw",
  },
  {
    id: 20,
    artist: "Camila Cabello",
    songName: "Havana",
    price: "$230",
    img: "https://i.pinimg.com/736x/02/17/1d/02171d26e769beaae7fb6789159e50d2.jpg",
  },
];
function App() {
  const [cardList, setCardList] = useState([]);
  const [filteredProduct, setFilterProducts] = useState(products);
  const [modalClicked, setModalClicked] = useState(false);

  const selectedProducts = (obj) => {
    if (cardList.length === 0) {
      setCardList([{ ...obj, count: 1 }]);
    }

    if (
      cardList.find((val) => {
        return val.id === obj.id;
      })
    ) {
      setCardList(
        cardList.map((val) => {
          return val.id === obj.id ? { ...val, count: ++val.count } : val;
        })
      );
    } else {
      setCardList([...cardList, { ...obj, count: 1 }]);
    }
  };

  let timeout;
  const filteredbySearch = (evt) => {
    if (evt.target.value === "") {
      setTimeout(() => {
        setFilterProducts(products);
      }, 500);
    } else {
      const a = products.filter((obj) => {
        return obj.songName.includes(evt.target.value);
      });

      if (timeout !== undefined) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setFilterProducts(a);
      }, 500);
    }
  };

  const onClickModal = () => {
    if (modalClicked === true) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }

    setModalClicked(!modalClicked);
  };

  return (
    <div className="App">
      <Header
        thereIsModal={modalClicked}
        onClickModal={onClickModal}
        filteredData={filteredbySearch}
        cardList={cardList}
      />
      <Main
        className={`main`}
        buttonClick={selectedProducts}
        products={filteredProduct}
      />
    </div>
  );
}

export default App;
