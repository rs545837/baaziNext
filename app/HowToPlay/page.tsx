import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  export function AlertDialogDemo() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">How To Play</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
          <AlertDialogTitle>STEP-1</AlertDialogTitle>
            <AlertDialogDescription>
            Choose Three or More Players
            </AlertDialogDescription>
            <AlertDialogTitle>STEP-2</AlertDialogTitle>
            <AlertDialogDescription>
            Pick MORE or LESS on their projected stats
            </AlertDialogDescription>
            <AlertDialogTitle>STEP-3</AlertDialogTitle>
            <AlertDialogDescription>
            Expore our inplay options for more fun, which are going to be released soon.
            </AlertDialogDescription>
            <AlertDialogTitle>STEP-4</AlertDialogTitle>
            <AlertDialogDescription>
            Wait for the game to end and see if you won!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  