import { useCounterStore } from "../stores/useCounterStore";

export default function Counter() {
    // const { count, increase, decrease, reset } = useCounterStore();
    const count = useCounterStore((state) => state.count);
    const increase = useCounterStore((state) => state.increase);
    const decrease = useCounterStore((state) => state.decrease);
    const reset = useCounterStore((state) => state.reset);

    return (
        <div className="text-center p-5">
            <h2 className="text-2xl font-bold mb-4">Count: {count}</h2>

            <div className="flex gap-2 justify-center">
                <button onClick={decrease} className="btn btn-error">- Decrease</button>
                <button onClick={reset} className="btn btn-neutral">Reset</button>
                <button onClick={increase} className="btn btn-primary">+ Increase</button>
            </div>
        </div>
    );
}

