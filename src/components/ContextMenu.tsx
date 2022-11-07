import React from 'react'
import * as RadixContextMenu from '@radix-ui/react-context-menu'

const ContextMenu = () => {
  return (
    <RadixContextMenu.Root>
        <RadixContextMenu.Trigger>
            <div className="h-24 w-36 rounded-lg border-2 border-dashed border-white grid place-items-center">
                <span>Right click</span>
            </div>
        </RadixContextMenu.Trigger>
        <RadixContextMenu.Content className="bg-fair-400 text-white text-sm rounded-sm p-1 flex flex-col gap-2 min-w-[32px]">
            <RadixContextMenu.Item className="p-2 hover:bg-fair-300 hover:outline-none cursor-pointer rounded-sm">Add to queue</RadixContextMenu.Item>
            <RadixContextMenu.Separator className="border-b border-white" />
            <RadixContextMenu.Item className="p-2 hover:bg-fair-300 hover:outline-none cursor-pointer rounded-sm">Go to artist</RadixContextMenu.Item>
            <RadixContextMenu.Item className="p-2 hover:bg-fair-300 hover:outline-none cursor-pointer rounded-sm">Go to album</RadixContextMenu.Item>
        </RadixContextMenu.Content>
    </RadixContextMenu.Root>
  )
}

export default ContextMenu