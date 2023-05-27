package main

import (
	"fmt"
	"net/http"

	"github.com/charmbracelet/log"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/api/{url}", UrlRequestHandler)
	http.Handle("/", r)
	http.ListenAndServe(":8000", nil)

}

func UrlRequestHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Url: %v\n", vars["url"])
	log.Infof("Request received %s", vars["url"])
}
