'use clinet'
import React from 'react';
import useSWR from "swr";
import Select from "react-select";


const fetchModels = () => fetch('/api/getEngines').then(res => res.json())
const ModelSelection = () => {
    const {data: models, isLoading} = useSWR('models', fetchModels)
    const {data: model, mutate: setModel} = useSWR('model', {fallbackData: 'text-devinci-003'})
    return (
        <div className="mt-2">
            <Select className="mt-2 text-black" isSearchable isLoading={isLoading} menuPosition="fixed" classNames={{
                control: (state) => "bg-[#434654] border-[#434654]"
            }}
                    placeholder={model}
                    defaultValue={model}
                    options={models?.modelOptions}
                    onChange={(e) => setModel(e.value)}
            />
        </div>
    );
};

export default ModelSelection;