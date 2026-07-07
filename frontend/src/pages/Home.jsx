import Hero from "../components/Hero";
import Input from "../components/Input";

function Home() {
    return (
        <div>
            <Hero />

            <div className="text-center pt-4">
                <Input />
            </div>
        </div>
    );
}

export default Home;