function print(n:number):void{
    for(var i=1;i<=n;i++){
        for(var x=0;x<n-i;x++){
             console.log("");
        }
        for(var y=0;y<i;y++){
             console.log("*");

        }
        console.log("\n");
    }
}
var n:string = process.argv[2];
print(parseInt(n));