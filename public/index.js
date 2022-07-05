function getClient() {
    return "866FD557";
}
function getHash(){
  clientid = getClient();
   clientSecret = "9bba5d8e252fa33c5714";
   timestamps = Math.floor(Date.now()/1000);
   data = this.clientid + this.clientSecret + this.timestamps;
  hashValue = shajs('sha256').update(this.data).digest('hex');
  
  return hashValue;
}

function getTimestamps() {
    timestamps = Math.floor(Date.now()/1000);
    return timestamps;
}
function getData(res){
    console.log(res);
    return "success"
}