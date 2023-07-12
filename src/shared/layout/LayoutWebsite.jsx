import Footer from "./footer";
import Header from "./header";
import { Layout, Modal } from 'antd';
import Search from "antd/es/transfer/search";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { APP_SAVE_KEYS } from "../constants";

const { Content } = Layout;

const LayoutWebsite = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(() => {
      const key = getCookie(APP_SAVE_KEYS.KEYS)
      if (typeof key === 'string') {
          const decodeData = jwt_decode(key)
          dispatch(login(decodeData))
      }
  }, [])

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };         
    const onSearch = (value) => console.log(value);
    return (
        <Layout>
            <Header showModal={showModal} />
            <Content className='m-6 min-h-screen rounded-lg bg-white md:m-4'>
                <div className='p-2 min-h-screen'>
                <Modal title="Search Something" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Search className="mb-10" placeholder="Input food" onSearch={onSearch} enterButton />
                </Modal>
                    {children}
                </div>
            </Content>
            <Footer />
        </Layout>
    );
}

export default LayoutWebsite;