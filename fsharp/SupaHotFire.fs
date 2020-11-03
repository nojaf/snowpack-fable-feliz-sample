module SupaHotFire

open Fable.React.Props
open Feliz

[<ReactComponent>]
let SupaHotFire (tagline:string) =
    Html.div [
        Html.img [
            prop.src "https://www.myinstants.com/media/instants_images/untitled_11.png"
            prop.style [ style.border (1, borderStyle.solid, "white")  ]
        ]
        Html.h1 [ prop.text "Supa Hot Fire" ]
        Html.strong [ prop.text tagline ]
        Html.p []
    ]