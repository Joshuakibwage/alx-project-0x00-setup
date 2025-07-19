import Card from "@/components/Card";
import Button from "@/components/Button";


const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight ">Landing Page</h1>
            <Card />

            <Button title="Small / rounded-sm" size="small" rounded="rounded-sm" />
            <Button title="Small / rounded-md" size="small" rounded="rounded-md" />
            <Button title="Small / rounded-full" size="small" rounded="rounded-full" />

            <Button title="Medium / rounded-sm" size="medium" rounded="rounded-sm" />
            <Button title="Medium / rounded-md" size="medium" rounded="rounded-md" />
            <Button title="Medium / rounded-full" size="medium" rounded="rounded-full" />

            <Button title="Large / rounded-sm" size="large" rounded="rounded-sm" />
            <Button title="Large / rounded-md" size="large" rounded="rounded-md" />
            <Button title="Large / rounded-full" size="large" rounded="rounded-full" />
            
        </div>
    )
}



export default Landing;