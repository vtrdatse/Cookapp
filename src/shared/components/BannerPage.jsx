const BannerPage = ({title}) => {
    return (
        <>
        <div className="w-full max-h-[300px] overflow-hidden opacity-80">
            <div
                className='w-full min-h-[500px] font-bold text-white text-6xl py-32 text-center'
                style={{
                    backgroundImage: `url("https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000")`,
                    backgroundOrigin: 'initial',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    opacity: 1,
                }}
            >
                {title}
            </div>
        </div>
        </>
    );
}

export default BannerPage;